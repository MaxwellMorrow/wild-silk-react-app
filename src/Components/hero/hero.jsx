import "./hero.styles.scss";

export default function Hero(){
    return (
      <section className="hero is-large hero-image">
        <div className="hero-body">
          <p className="hero-title"></p>
          <div className="shop-now-btn">
              <button className="button is-black" id="shop-now">
                  SHOP NOW
              </button>
          </div>
        </div>
      </section>
    );
}