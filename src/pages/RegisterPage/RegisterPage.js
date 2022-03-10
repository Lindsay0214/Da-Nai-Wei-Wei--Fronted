import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { register } from '../../features/userSlice';
import SubFooter from '../../components/SubFooter';

const RegisterPage = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      nickname,
      email,
      password
    };
    dispatch(register(history, payload));
  };

  const GAevent = (categoryName, eventName, labelName) => {
    ReactGA.event({
      category: categoryName,
      action: eventName,
      label: labelName,
      value: 10,
      nonInteraction: false
    });
  };

  return (
    <div className="bg-yellow-lightYellow">
      <div className="flex h-full">
        <div className="py-16 m-auto mt-10 bg-white rounded-lg md:pt-20 w-80 md:w-3/6 lg:w-2/6 h-4/6 lg:mt-36">
          <div className="flex items-center justify-center text-2xl font-bold tracking-wider text-gray-deepGray">
            註冊訂飲料囉！
          </div>
          <div className="flex flex-col items-center justify-center m-auto my-10 w-80">
            <input
              placeholder="真實姓名"
              className="flex-col p-2 font-light rounded-lg w-60 bg-gray-input md:w-80"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            ></input>
            <input
              placeholder="電子信箱"
              className="p-2 mt-4 font-light rounded-lg w-60 md:w-80 bg-gray-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              placeholder="密碼，需要 8~16 位英數混合"
              className="flex-col p-2 mt-4 font-light rounded-lg w-60 bg-gray-input md:w-80"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-yellow-deepYellow m-2 text-white  md:px-4 px-4 py-1.5 border border-yellow-deepYellow rounded-lg hover:hover"
              type="submit"
              onSubmit={handleSubmit}
              onClick={() => GAevent('User', 'Button_Register', '註冊測試鈕')}
            >
              註冊
            </button>
            <Link
              className=" m-2 text-gray-500 bg-gray-200 md:px-4 px-2 py-1.5 rounded-lg border border-bg-gray-200 hover:hover"
              to="/login"
            >
              已有帳號
            </Link>
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
};

export default RegisterPage;
