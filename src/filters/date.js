import moment from 'moment';

export default (value) => {
  const date = new Date(value);

  return date ? moment(date).format('MMMM Do YYYY, h:mm a') : '';
};
