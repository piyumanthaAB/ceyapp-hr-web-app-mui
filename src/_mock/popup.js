import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

export const popups = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  media: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  title: faker.name.jobTitle(),
  popup_id: faker.datatype.number(),
  message: sample([
    'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body ',
    'Temporary The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body',
    'Probation',
  ]),
  link: faker.internet.url(),
  startDate: faker.date.future().toISOString(),
  endDate: faker.date.future().toISOString(),
  createdDate: faker.date.past().toISOString(),
  categories: sample(['Permanent', 'Temporary', 'Probation']),
  repeat: sample([true, false]),
  window_size: sample(['Small', 'Medium', 'Large']),
}));
