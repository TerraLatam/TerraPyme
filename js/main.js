$(document).ready(function () {
  //SLIDER HOMEPAGE
  $("#icons_slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerMode: false,
          centerPadding: "60px",
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          centerPadding: "50px",
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerMode: false,
          centerPadding: "30px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // VALIDATE INPUTS registro-crear-cuenta.html
  $(
    "#form_registro_cuenta input, #form_recuperar_password input, #form_ingresar_a_tu_cuenta input"
  ).blur(function () {
    var empty = $("form")
      .find("input")
      .filter(function () {
        return this.value === "";
      });
    if (empty.length) {
      $("form button.main_button").addClass("btn_disable");
    } else {
      $("form button.main_button").removeClass("btn_disable");
    }
  });

  // ANIMATION LABELS CONTACT FORM registro-crear-cuenta.html
  $("input").focus(function () {
    $(this).parents(".form-group").addClass("focused");
  });
  $("input").blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass("filled");
      $(this).parents(".form-group").removeClass("focused");
    } else {
      $(this).addClass("filled");
    }
  });

  //GENERAR CONTRASEÑA: desbloquea botón si las contraseñas son iguales y cumple co los requisitos
  //registro-crear-password.html
  $("#form_recuperar_password #confirm_new_password").blur(function () {
    if ($("#new_password").val() == $("#confirm_new_password").val()) {
      var upperCase = new RegExp("[A-Z]");
      var lowerCase = new RegExp("[a-z]");
      var numbers = new RegExp("[0-9]");
      if (
        $(this).val().match(upperCase) &&
        $(this).val().match(lowerCase) &&
        $(this).val().length > 7 &&
        $(this).val().match(numbers)
      ) {
        $("form button.main_button").removeClass("btn_disable");
        $(".title_red").addClass("alert");
      } else {
        $("#modal_contraseña_no_valida").show();
        $("form button.main_button").addClass("btn_disable");
        $(".title_red").removeClass("alert");
      }
    } else {
      $("form button.main_button").addClass("btn_disable");
      $(".title_red").removeClass("alert");
    }
  });

  $(".wrong_input").after(
    "<div class='my_tooltip'>La contraseña es incorrecta</div>"
  );

  //GENERAR CONTRASEÑA: show-hide password
  //registro-crear-password.html
  $(".pssw1").click(function () {
    $(this).toggleClass("showPss");

    var x = $("#new_password");
    if (x.attr("type") === "password") {
      x.attr("type", "text");
    } else {
      x.attr("type", "password");
    }
  });
  $(".pssw2").click(function () {
    $(this).toggleClass("showPss");

    var x = $("#confirm_new_password");
    if (x.attr("type") === "password") {
      x.attr("type", "text");
    } else {
      x.attr("type", "password");
    }
  });

  //TABLE ICONS TOGGLE
  $(".table_icons").click(function () {
    $(this).toggleClass("grey_bck");
  });
  //OPEN AND CLOOSE MODAL WITH X ICON AND ESCAPE
  $(".chech_icon, .edit_icon").click(function () {
    $("body").addClass("lightbox_opened");
  });
  $(".close_popup").click(function () {
    $("body").removeClass("lightbox_opened");
    $(".chech_icon, .edit_icon").removeClass("grey_bck");
  });
  $(document).on("keydown", function (event) {
    if (event.key == "Escape") {
      $("body").removeClass("lightbox_opened");
    }
  });
});

//CUSTOM SELECT
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
