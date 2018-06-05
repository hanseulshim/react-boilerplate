import { shape, bool, func } from 'prop-types';

export const toggleNameFunction = shape({
  toggleName: func.isRequired,
});

export const showName = shape({
  showName: bool.isRequired,
});
