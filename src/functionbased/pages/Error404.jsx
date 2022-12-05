// eslint-disable-next-line import/no-extraneous-dependencies
import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home', { replace: true });
  });
  return (
    <>
      <div>
        404 not found
      </div>
    </>
  );
};
export default ErrorPage;
