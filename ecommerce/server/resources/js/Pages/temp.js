<div className="col-lg-6">
  <div className="row m-sm-0">
    <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0">
      <div className="owl-thumbs d-flex flex-row flex-sm-column" data-slider-id="1">
        <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src="../img/product-detail-1.jpg" alt="..." /></div>
        <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src="../img/product-detail-2.jpg" alt="..." /></div>
        <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src="../img/product-detail-3.jpg" alt="..." /></div>
        <div className="owl-thumb-item flex-fill mb-2"><img className="w-100" src="../img/product-detail-4.jpg" alt="..." /></div>
      </div>
    </div>
    <div className="col-sm-10 order-1 order-sm-2">
      <div className="owl-carousel product-slider" data-slider-id="1"><a className="d-block" href="img/product-detail-1.jpg" data-lightbox="product" title="Product item 1"><img className="img-fluid" src={'../img/' + props.ipath} alt="..." /></a><a className="d-block" href="img/product-detail-2.jpg" data-lightbox="product" title="Product item 2"><img className="img-fluid" src="../img/product-detail-2.jpg" alt="..." /></a><a className="d-block" href="img/product-detail-3.jpg" data-lightbox="product" title="Product item 3"><img className="img-fluid" src="../img/product-detail-3.jpg" alt="..." /></a><a className="d-block" href="img/product-detail-4.jpg" data-lightbox="product" title="Product item 4"><img className="img-fluid" src="../img/product-detail-4.jpg" alt="..." /></a></div>
    </div>
  </div>
</div>


mix.js('resources/js/app.js', 'public/js/app.js')
//     .js(['resources/theme/vendor/jquery/jquery.min.js' ,
//     'resources/theme/vendor/bootstrap/js/bootstrap.bundle.min.js',
//     'resources/theme/vendor/lightbox2/js/lightbox.min.js',
//     'resources/theme/vendor/bootstrap-select/js/bootstrap-select.min.js',
//     'resources/theme/vendor/owl.carousel2/owl.carousel.min.js',
//     'resources/theme/vendor/owl.carousel2.thumbs/owl.carousel2.thumbs.min.js',
//     'resources/theme/js/front.js',
// ], 'public/js/test/testapp.js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .styles(['resources/theme/vendor/lightbox2/css/lightbox.min.css' ,
    'resources/theme/vendor/bootstrap-select/css/bootstrap-select.min.css' ,
    'resources/theme/vendor/owl.carousel2/assets/owl.carousel.min.css' ,
    'resources/theme/vendor/owl.carousel2/assets/owl.theme.default.css' ,
    'resources/theme/css/style.default.css' ,
     'resources/theme/css/custom.css'], 'public/css/test/dstyle.css');
