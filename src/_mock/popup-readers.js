import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

export const popupReaders = {
  title: 'Test Title Popup',
  readers: [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    viewed_date: faker.date.past().toISOString(),
    popup_id: faker.datatype.number(),
    employee_name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    reaction_type: sample(['like', 'heart', 'dislike']),
  })),
};
