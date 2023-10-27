import HomeBtn from './Buttons/NavBtns/HomeBtn';
import ShopBtn from './Buttons/NavBtns/ShopBtn';

export default function ErrorPage() {
  return (
    <div className="errorPage">
      {/* <h2>{`Error-404`}</h2> */}
      <img src="./errorpage.svg" alt="error-page-logo" />
      <p>
        <a
          className="attribute"
          href="https://www.freepik.com/free-vector/404-error-with-portals-concept-illustration_20602754.htm#query=error%20404&position=21&from_view=search&track=ais"
        >
          Image by storyset
        </a>{' '}
        on Freepik
      </p>
      <p>{`Sorry but the page you tried to access either don't exist or there was a network issue.`}</p>
      <p>try these links instead.</p>
      <ul>
        <li>
          <HomeBtn btnType={'defaultBtn'} />
        </li>
        <li>
          <ShopBtn btnType={'defaultBtn'} />
        </li>
      </ul>
    </div>
  );
}
