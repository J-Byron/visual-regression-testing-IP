import { storiesOf } from '@storybook/polymer';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import colors from '../../shared/crds-icon-colors'
import names from './crds-icon-names'

const stories = storiesOf('Icons', module);

stories
  .addDecorator(withKnobs)
  .add('Static Icon', () => {

    const nameOptions = () => {
      const result = {}
      names.forEach(name => result[name] = name)
      return result;
    }

    const name = select('name', nameOptions(), 'media-article');

    const sizeOptions = { '12': '12', '24': '24', '36': '36' }
    const size = select('size(px)', sizeOptions, '24');

    const color = select('color', colors, 'black')


    return `
        <crds-icon name="${name}" size="${size}" color="${color}"></crds-icon>
    `;
  })