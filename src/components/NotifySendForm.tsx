import React from 'react';

const NotifySendForm = ({statusModal}) => (
  <div>
    {statusModal === 'sended' && <h4 className='text-4xl text-center py-7'>Ваши данные отправлены. Мы свяжемся с вами в ближайшее время.</h4>}
    {statusModal === 'error' && <h4 className='text-4xl text-center py-7 text-red-600'>Возникли ошибки при отправке. Попробуйте сделать что-нибудь еще.</h4>}
  </div>
);

export default NotifySendForm;