AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
      const id = this.el.getAttribute("id");
      const comicId = ["superman", "spiderman", "captain-aero", "outer-space"];
      if (comicId.includes(id)) {
        const comicContainer = document.querySelector("#places-container");
        comicContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("meterial", {
            color: "#1565c0"
        })
        }
      });
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
  });