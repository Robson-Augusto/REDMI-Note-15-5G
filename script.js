$(".slick-2").slick({
slidesToShow: 1,  // Exibe 1 slide por vez
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplay: true,  // Ativa o autoplay
      autoplaySpeed: 4000, // Tempo entre transições automáticas
      dots: false, // Não exibe os indicadores de navegação personalizados
      arrows: false, // Mantém as setas de navegação
      infinite: true, // Loop infinito ativado
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', // Efeito "elástico" profissional
      cssEase: 'linear', // Suaviza a transição
      variableWidth: true,     // Permite larguras personalizadas (essencial)
});

$(document).ready(function(){
  $('.perspective-slider').slick({
    centerMode: true,        // Fundamental para o foco central
    variableWidth: true,     // Permite larguras personalizadas (essencial)
    slidesToShow: 3,         // Mostra o do meio + vizinhos para o efeito 3D
    focusOnSelect: true,     // Clicar no slide lateral traz ele pro meio
    autoplay: true,          // Movimento automático
    autoplaySpeed: 4000,     // Velocidade da troca   // Velocidade da animação
    arrows: false,
    dots: false,
    infinite: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)', // Efeito "elástico" profissional
    pauseOnHover: false      // Não para o mouse passar (opcional, dá mais fluidez)
  });
});

// $(document).ready(function () {

//   const $slider = $('.perspective-slider');
//   const $focalItems = $('.focal-item');
//   const $focalOptions = $('.focal-option');
//   const $indicator = $('.focal-track-indicator');

//   function updateFocal(index) {

//     // --- FOCAL INFO ---
//     $focalItems.removeClass('active');
//     $focalItems.eq(index).addClass('active');
//   }

//   // Evento principal do Slick
//   $slider.on('afterChange', function (event, slick, currentSlide) {
//     const realIndex = slick.currentSlide;
//     updateFocal(realIndex);
//   });


//   // Estado inicial
//   updateFocal(0);

// });


$(document).ready(function () {

  const $slider = $('.perspective-slider');
  const $focalItems = $('.focal-item');
  const $focalOptions = $('.focal-option');
  const $indicator = $('.focal-track-indicator');
  const maxOptions = $focalOptions.length;

  function updateFocal(index) {

    // --- FOCAL INFO ---
    $focalItems.removeClass('active');
    $focalItems.eq(index).addClass('active');

    // --- FOCAL SELECTOR (somente se existir opção) ---
    if (index < maxOptions) {

      $focalOptions.removeClass('active');
      const $active = $focalOptions.eq(index);
      $active.addClass('active');

      const width = $active.outerWidth();
      const left = $active.position().left;

      $indicator.css({
        width: width,
        transform: `translateX(${left}px)`
      });

    } else {
      // Slide sem opção correspondente
      $focalOptions.removeClass('active');
      $indicator.css({ width: 0 });
    }
  }

  // Slick → Texto + Selector
  $slider.on('afterChange', function (e, slick, currentSlide) {
    updateFocal(slick.currentSlide);
  });

  // Selector → Slick
  $focalOptions.on('click', function () {
    const index = $(this).index();
    $slider.slick('slickGoTo', index);
  });

  // Inicialização correta
  updateFocal(0);

});
