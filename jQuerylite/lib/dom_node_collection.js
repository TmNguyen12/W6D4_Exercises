class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(string) {
    if (string) {
      this.nodes.forEach(function(el) {
        el.innerHTML = string;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html(new String(""));
  }

  append(argument) {

  if (typeof argument === "string") {
    this.nodes.forEach(el => {
      el.innerHTML += argument;
    });
  } else if (argument.nodes[0]) {
      this.nodes.forEach( el => {
        argument.nodes.forEach( arg => {
          console.log(arg.outerHTML);
          console.log(el.innerHTML);
          el.innerHTML += (arg.outerHTML);
        });
      });
    } else {
      let newDOM = new DOMNodeCollection(argument);
      this.nodes.forEach( el => {
        newDOM.forEach( arg => {
          el.innerHTML += (arg.outerHTML);
        });
      });
    }
  }

}

module.exports = DOMNodeCollection;
