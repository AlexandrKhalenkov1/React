import React from 'react';
import cn from 'classnames';
import Button from '../Button';

const Buttons = ({ buttons }) => buttons.map(({
  text, onClick, active, id
}) => (
  <Button key={id} className={cn('btnsInFooter', { active })} onClick={onClick} text={text} />
));
export default Buttons;
