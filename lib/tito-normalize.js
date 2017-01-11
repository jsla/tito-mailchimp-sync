module.exports = ({
  first_name,
  last_name,
  email,
  admin_url,
  registration_id
}) => {
  return {
    type: 'ticket',
    id: registration_id,
    first_name,
    last_name,
    email,
    admin_url
  }
}
