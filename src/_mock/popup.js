import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

export const popup = {
  title: 'Test Title Popup',
  id: 1234,
  media: `/assets/images/avatars/avatar_${1 + 1}.jpg`,
  popup_id: 121212,
  message: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body ',
  link: '',
  startDate: faker.date.future().toISOString(),
  endDate: faker.date.future().toISOString(),
  createdDate: faker.date.past().toISOString(),
  categories: 'permanant',
  repeat: true,
  window_size: 'large',
  readers: [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    viewed_date: faker.date.past().toISOString(),
    popup_id: faker.datatype.number(),
    employee_name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    reaction_type: sample(['like', 'heart', 'dislike']),
  })),
};
