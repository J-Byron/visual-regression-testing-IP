import { Component, Element, h, Prop, State } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { TitheUser, Response } from './crds-tithe-challenge.interface';
import { ContentBlockHandler } from '../../shared/contentBlocks/contentBlocks';
import { CrdsApolloService } from '../../shared/apollo';
import {
  GET_DONATIONS,
  GET_USER_GROUPS,
  GET_FEELING_RESPONSES,
  LOG_USER_RESPONSE
} from './crds-tithe-challenge.graphql';
import { SvgSrc } from '../../shared/svgSrc';
import { Utils } from '../../shared/utils';
import { isAuthenticated } from '../../global/authInit';

@Component({
  tag: 'crds-tithe-challenge',
  styleUrl: 'crds-tithe-challenge.scss',
  shadow: true
})
export class CrdsTitheChallenge {
  private analytics = window['analytics'];
  private contentBlockHandler: ContentBlockHandler;
  private feelings: Response[] = [];
  private lengthOfChallenge: number = 90;
  private titheImage = 'https://crds-media.imgix.net/2kyAbv69Gp1iPwpNMlUcXx/8b4df043d517e714447f96fd43440c24/90DTT.svg';

  @State() user: TitheUser = null;
  @Prop() selectedFeeling: Response;
  @Element() public host: HTMLStencilElement;

  public componentDidLoad() {
    Utils.trackInView(this.host, 'TitheChallenge', this.isUserInChallenge.bind(this));
  }

  public async componentWillLoad() {
    await CrdsApolloService.subscribeToApolloClient();
    this.contentBlockHandler = new ContentBlockHandler(CrdsApolloService.apolloClient, 'tithe challenge');
    return Promise.all([
      this.contentBlockHandler.getCopy(),
      this.getFeelingResponses(),
      isAuthenticated() ? this.getUser() : null
    ]);
  }

  public componentWillRender() {
    if (!this.isUserInChallenge()) return; //exit because we cant do anything else at this point
    if (!this.user.donations) return this.getUserDonations();
  }

  public getUser() {
    return CrdsApolloService.apolloClient.query({ query: GET_USER_GROUPS }).then(response => {
      this.user = response.data.user;
    });
  }

  public getUserDonations() {
    return CrdsApolloService.apolloClient
      .query({
        variables: { startDate: this.user.groups[0].userStartDate },
        query: GET_DONATIONS
      })
      .then(response => {
        this.user.donations = response.data.user.donations;
        this.user.recurringGifts = response.data.user.recurringGifts;
      });
  }

  private getFeelingResponses() {
    return CrdsApolloService.apolloClient.query({ query: GET_FEELING_RESPONSES }).then(response => {
      this.feelings = response.data.feelingResponses.map(response => {
        return { id: response.id, value: response.value };
      });
    });
  }

  private getDaysDown() {
    return this.convertTimeToDays(this.getDaysDownTime(new Date().getTime(), this.user.groups[0].userStartDate));
  }

  private getDaysToGo() {
    return 90 - this.getDaysDown();
  }

  private getDayText() {
    return this.getDaysDown() == 1 ? 'day' : 'days';
  }

  private logUserResponse() {
    return CrdsApolloService.apolloClient
      .mutate({
        variables: { response: this.selectedFeeling },
        mutation: LOG_USER_RESPONSE
      })
      .catch(err => console.error(err));
  }

  private isUserActive() {
    return this.user.donations.length || this.user.recurringGifts.length;
  }

  private isUserInChallenge() {
    return this.user && this.user.groups.length;
  }

  private getProgress() {
    const diffTime = this.getDaysDownTime(new Date().getTime(), this.user.groups[0].userStartDate);
    return 100 - Math.floor((this.convertTimeToDays(diffTime) / this.lengthOfChallenge) * 100);
  }

  private getDaysDownTime(now: number, userStartDate: number): number {
    var startDate = new Date(0);
    startDate.setTime(userStartDate * 1000);
    const diffTime = Math.abs(now - startDate.getTime());
    return diffTime;
  }

  private convertTimeToDays(time: number): number {
    return Math.ceil(time / (1000 * 60 * 60 * 24));
  }

  private organizeFeelingsOrder(feelings) {
    let blessedFeeling = feelings.find(feeling => feeling.value === '#Blessed');
    let indexOfBlessedFeeling = feelings.indexOf(blessedFeeling);
    let feelingsMinuseBlessed = feelings
      .slice(0, indexOfBlessedFeeling)
      .concat(feelings.slice(indexOfBlessedFeeling + 1));
    feelingsMinuseBlessed.push(feelings[indexOfBlessedFeeling]);
    return feelingsMinuseBlessed;
  }

  private handleFeelingSelected(feeling) {
    this.selectedFeeling = feeling;
    this.logUserResponse();
    try {
      this.analytics.track(`FeelingSelected`, {
        parent: this.host.tagName,
        feeling: this.selectedFeeling,
        user: this.user
      });
    } catch (error) {
      console.error(error);
    }
  }

  public render() {
    if (!this.shouldShowComponent()) return null;
    return <div class="tithe-challenge">{this.isUserActive() ? this.renderStarted() : this.renderNotStarted()}</div>;
  }

  public renderNotStarted() {
    return (
      <div class="tithe-container d-flex">
        <div class="m-auto text-center">
          <img class="tithe-logo" src={this.titheImage} />
        </div>
        <div class="divider" />
        <div class="text-container">
          {this.contentBlockHandler.getContentBlock('tithe-encourage', { userName: this.user.nickName })}
        </div>
      </div>
    );
  }

  public renderStarted() {
    return (
      <div class="tithe-container d-flex">
        <div class="m-auto text-center">
          <img class="tithe-logo" src={this.titheImage} />
        </div>
        <div class="divider" />
        <div class="text-container">
          {!this.selectedFeeling
            ? this.contentBlockHandler.getContentBlock('tithe-started', {
                name: this.user.nickName,
                daysDown: this.getDaysDown().toString(),
                daysToGo: this.getDaysToGo().toString(),
                dayText: this.getDayText()
              })
            : ''}

          <div class="progress-container">
                    
            <div class="meter">
                        
              <span style={{ width: `${this.getProgress()}%` }} />
              <div class="user-img-container" style={{ width: `${this.getProgress()}%` }}>
                <div
                  class="user-img"
                  style={{
                    backgroundImage: `url('${this.user.imageUrl}?thumbnail=true')
                                   ,url('https://crossroads-media.imgix.net/images/avatar.svg')`
                  }}
                />
              </div>
                      
            </div>
            <div class="d-flex push-half-top">
              <p class="text-white text-uppercase">start</p>
              <p class="text-finished text-uppercase ml-auto">finished</p>
            </div>
          </div>

          {this.selectedFeeling ? this.renderFeelingResponse() : this.renderFeelingSelection()}
          {!this.selectedFeeling ? this.renderFeelingsExplanation() : null}
        </div>
      </div>
    );
  }

  public renderFeelingsExplanation() {
    return <div>{this.contentBlockHandler.getContentBlock('tithe-feelings-explanation')}</div>;
  }

  public renderFeelingSelection() {
    return (
      <div class="flush-top">
        <h3 class="text-white text-center font-family-condensed-extra text-uppercase flush-top flush-bottom">
          I'm feeling:
        </h3>
        <div class="push-top">
          <ul id="feelingsButtonsList" class="feelings-list">
            {this.organizeFeelingsOrder(this.feelings).map(feeling => (
              <li value={feeling.id} onClick={() => this.handleFeelingSelected(feeling)} data-name={feeling.value}>
                <a class="pill-button font-family-condensed-extra font-size-base" id={'feeling-' + feeling.id}>
                  {feeling.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  public renderFeelingResponse() {
    return this.contentBlockHandler.getContentBlock(`feelingResponse${this.selectedFeeling.id}`);
  }

  private shouldShowComponent(): boolean {
    return this.user && !!this.user.groups.length;
  }
}
