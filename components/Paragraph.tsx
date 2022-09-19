import { FC } from 'react';

type Props = {
  text: string;
};

const Heading: FC<Props> = ({ text }) => {
  return (
    <p className="mb-20 sm:mr-12 sm:ml-20 text-on-surface text-body">{text}</p>
  );
};

export default Heading;
