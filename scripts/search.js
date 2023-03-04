function searchController() {
    let searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keyup", () => {
        //console.log(searchBar.value);
        if (searchBar.value.length === 0) {
            if (document.getElementById("searched") !== null) {
                document.getElementById("searched").remove();
            }
        }
        if (searchBar.value.length !== 0) {
            fetch("http://localhost:8080/search", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + localStorage.getItem("token")
                },
                body: /*"searchText=" + */searchBar.value
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                    //console.log(typeof(data))
                    if (data.length !== 0) {
                        //console.log(typeof (null));
                        if (document.getElementById("searched") !== null) {
                            document.getElementById("searched").remove();
                        }

                        if (document.getElementById("searched") === null) {
                            var searchedDiv = document.createElement("div");
                            searchedDiv.setAttribute("id", "searched");
                        }

                        document.getElementById("content").append(searchedDiv);
                        data.forEach(element => {
                            if (element !== localStorage.getItem("username")) {
                                //console.log(element);
                                let item = document.createElement("p");
                                item.setAttribute("class", "items");
                                item.innerHTML = element;
                                item.addEventListener("click", () => {
                                    localStorage.setItem("target", element);
                                    //console.log(localStorage.getItem("target"));
                                    location.href = "http://localhost:5500/messaging.html";
                                })
                                searchedDiv.append(item);
                            }
                        });
                    }//avoiding search for all users,when user blanks searchbar empty
                    if (data.length === 0) {
                        if (document.getElementById("searched") !== null) {
                            document.getElementById("searched").remove();
                        }
                    }
                })
        }
    })
}
searchController();