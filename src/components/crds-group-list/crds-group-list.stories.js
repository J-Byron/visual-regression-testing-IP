import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Personalization', module);
stories
  .addDecorator(withKnobs)
  .addParameters({ percy: { skip: true } })
  .add('crds-group-list', () => {
    return `<crds-group-list/>`;
  });
