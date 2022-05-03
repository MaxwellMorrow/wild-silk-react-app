import "./hero.styles.scss";

export default function Hero(){
    return (
      <section class="hero is-large is-info hero-image">
        <div class="hero-body">
          <p class="hero-title"></p>
          <div className="shop-now-btn">
              <button className="button is-black" id="shop-now">
                  SHOP NOW
              </button>
          </div>
        </div>
      </section>
    );
}