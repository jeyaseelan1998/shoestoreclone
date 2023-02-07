import React from 'react'

import './DetailedView.css';

const DetailedView = () => {
  return (
    <div class="detailed-view-bg-container">
        <h1 class="detailed-view-main-heading">
            Detailed View
        </h1>
        <div class="detailed-view-card">

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="false">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img alt="..." src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-c1-img.png" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img alt="..." src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-c2-img.png" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img alt="..." src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-c3-img.png" class="d-block w-100" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div class="text-container">
                <h1 class="detailed-view-heading">Tajmahal</h1>
                <p class="detailed-view-description">
                    The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture. Its recognised architectonic beauty has a rhythmic combination of solids and voids, concave and convex and light shadow; such as arches and domes further increases the aesthetic aspect. Not a piece of architecture, as other buildings are, but the proud passions of an emperor’s love wrought in living stones.
                </p>
            </div>


        </div>
    </div>
  )
}

export default DetailedView