import ShopBtn from '../Buttons/NavBtns/ShopBtn';

export default function Home() {
  return (
    <section className="homepage">
      <div className="homeLogo">
        <img src="./homelogo.svg" alt="homepage-logo" />
        <p>
          <a
            className="attribute"
            href="https://www.freepik.com/free-vector/ecommerce-web-page-concept-illustration_21727022.htm#query=e-commerce&position=2&from_view=search&track=sph"
          >
            Image by storyset
          </a>{' '}
          on Freepik
        </p>
      </div>
      <div>
        <h1>Online Store</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
          officiis repudiandae! Dolores odio minus quos ea nulla inventore
          provident velit beatae. Repellendus quas deleniti culpa suscipit
          dolore fuga totam quae!
        </p>
        <ShopBtn text="Shop Now" btnType={'defaultBtn'} />
      </div>
    </section>
  );
}
