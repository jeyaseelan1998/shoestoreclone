import React from 'react'

import './FavoritePlaces.css';

const FavoritePlaces = () => {
  return (
    <div class="favourite-places-bg-container">
        <h1 class="favourite-places-heading">Favourite Places</h1>
        <div class="favourite-place-card-container d-flex flex-row">
            <div>
                <h1 class="favourite-place-card-heading">Taj Mahal</h1>
                <p class="favourite-place-card-description">
                    If there was just one symbol to represent all of India, it would be
                    the Taj Mahal
                </p>
            </div>
            <img alt="..." src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-img.png" class="favourite-place-card-image" />
        </div>

        <div class="favourite-place-card-container d-flex flex-row">
            <div>
                <h1 class="favourite-place-card-heading">Golden Temple</h1>
                <p class="favourite-place-card-description">
                    Amritsar is world-famous for the beautiful and highly revered Golden
                    Temple
                </p>
            </div>
            <img alt="sample photography" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/golden-temple-img.png" class="favourite-place-card-image" />
        </div>

        <div class="favourite-place-card-container d-flex flex-row">
            <div>
                <h1 class="favourite-place-card-heading">Mysore Palace</h1>
                <p class="favourite-place-card-description">
                    The Mysore Palace is a historical palace and the royal residence at
                    Mysore .
                </p>
            </div>
            <img alt="sample photography" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/mysore-palace-img.png" class="favourite-place-card-image" />
        </div>

        <div class="favourite-place-card-container d-flex flex-row">
            <div>
                <h1 class="favourite-place-card-heading">Varanasi Temple</h1>
                <p class="favourite-place-card-description">
                    Varanasi Temple is most famous Hindu temples dedicated to Lord Shiva
                </p>
            </div>
            <img alt="sample photography" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/varanasi-temple-img.png" class="favourite-place-card-image" />
        </div>
    </div>
  )
}

export default FavoritePlaces