

var comicCon = ['comicCon','cosplay','acting','comics','fan','marvel','dc','indiecomics','actors','interviews','fanart','friday']
                var bookClub = ['bookClub', 'books','reading','bookstagram','saturday']
                var Cookingclub = ['Cookingclub','cooking','food','eating','saturday']
                var Foodies = ['Foodies','food','eating','cuisine','wenesday']
                var user = [];
                var ranking = {}
                var sortedRankings = []

                var eventsTags = {
                  "comicCon": ['cosplay','acting','comics','fan','marvel','dc','indiecomics','actors','interviews','fanart','friday'].join(''),
                "bookClub" : ['books','reading','bookstagram','saturday'].join(''),
                "Cookingclub" : ['cooking','food','eating','saturday'].join(''),
                "Foodies" : ['food','eating','cuisine','wenesday'].join('')
                }

                function name1()
                    {
                    var input = document.getElementById("userInput").value;
                    console.log(input);
                    user.push(input);
                    console.log(user);
                    }   
                 var events = [comicCon,
                   bookClub, Cookingclub, Foodies]
                function rank(){
                   events.forEach( event =>{
                      var counter = 0;
                      for(hoby of user) {
                          if (event.indexOf(hoby)>=0) {
                            counter += 1;
                          }
                      }
                      ranking[event[0]] = counter
                    })
                    console.log('ranking',ranking)
                for (var rank in ranking) {
                sortedRankings.push([rank, ranking[rank]]);
            }

            sortedRankings.sort(function(a, b) {
                return b[1] - a[1];
            });
            localStorage.setItem('sortedRankings', sortedRankings)
                  }
                
                  