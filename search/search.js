const postBtn = document.querySelector(".post_btn");
const postSelect = document.getElementById("posts");

const div = document.querySelector(".post_div");
const title = document.querySelector(".post_h2");
const add= document.querySelector(".address");
const pho = document.querySelector(".phone");
const img1 = document.querySelector(".post_img1");
const officersDiv = document.querySelector(".officers");
const sonsDiv = document.querySelector(".sons");
const auxDiv = document.querySelector(".aux");

postBtn.addEventListener("click", ()=>{
    clearDiv()
    div.style.display = "flex";
    if (postSelect.value == "Department of Maine"){
        title.textContent = postSelect.value;
        img1.src = ""
        add.textContent = ""
        pho.textContent = ""


        names(postSelect.value, officersDiv, "officers");
        names(postSelect.value, auxDiv, "aux");
    }
    
    else {
        let number = postSelect.value
        title.textContent = "Post " + number;
        img1.src = "../post_images/post" + number + ".png";
        add.textContent = postInfo.get(number).get("address");
        pho.textContent = postInfo.get(number).get("phone");

        names(number, officersDiv, "officers");
        names(number, sonsDiv, "sons");
        names(number, auxDiv, "aux");
        
    }
})

function names(num, div, map){
    for (i in postInfo.get(num).get(map)){
        const of = document.createElement("p");
        of.className = "searched";
        of.innerText = postInfo.get(num).get(map)[i];
        div.appendChild(of);
    }
}

function clearDiv(){
    const c = document.querySelectorAll(".searched")
    c.forEach(item => {
        item.remove()
    })
}

const postInfo = new Map
const mapdep = new Map
const map25 = new Map
const map2 = new Map
const map13 = new Map
const map3 = new Map
const map2001 = new Map

postInfo.set("Department of Maine", mapdep)
postInfo.set("25", map25)
postInfo.set("2", map2)
postInfo.set("13", map13)
postInfo.set("3", map3)
postInfo.set("2001", map2001)


mapdep.set("officers", ["Commander: Lewis Auspland","1st Vice: Henry Peters Jr","2nd Vice: Joy Haddad","Executive Director: Rod Anderson","Finance Officer: Paul Anderson","Judge Advocate: Richard Paiement","NEC: Jim Laflin","Service Foundation President: Gene Foster","Convention Corporation: Lionel Lamontagne","Legislative Officer: Kelley Winn","VAVS Rep: Heather Burr","Chaplain: Charles McGillicuddy","Provost Marshal: Bill Greene"]);
mapdep.set("aux", ["President: Connie Cordell", "1st Vice President: Marlene Walker", "2nd Vice President: Sarah Roy", "3rd Vice President: Caitlyn Brown", "Treasurer: Deborah Tardif", "Secretary: Pam Sawyer", "National Executive Committee Woman: Lisa Stoddard", "Americanism Officer: Nicole Shipp", "Scholarship Officer: Jennifer Doten", "Hospital Officer: Pam Sawyer", "Chaplain: Pam Sawyer, 207-239-6910, pamnap2583@gmail.com", "Parliamentarian: Lisa Stoddard", "Ways and Means: Tracy Burnham", "Sargeant at Arms: Mackenzie Walker", "Honors and Awards Chairman: Lisa Stoddard", "Convention Chairman: Lisa Stoddard"]);

map25.set("num", "25");
map25.set("address", "186 Washington Ave, Portland, ME 04101");
map25.set("phone", "(207) 772-9577");
map25.set("officers", ["Amvets Commander: Lawrance Bowie","1st Vice: Bob Goan","Finance Officier: Lewis Auspland","Judge Advocate / PDC: Richard Paiement","2nd Vice / Adjutant: Lewis Auspland","Trustees E-Board: Terrence McGuinness, James Connolly, Gene Connolly"]);
map25.set("sons", ["Sons Commander: Tim Wilson","1st Vice: Khris Berry","2nd Vice: John Burnham","3rd Vice: Corey Dame","Finance Officer: Tony Myatt","Adjutant: Bobby Jensen","Judge Advocate: Pat Seely","Provost: Chip Grindle","Chaplain: Stephen Burnham","Sons Liason: Lewis Auspland"]);
map25.set("aux", ["Auxiliary President: Tracy Burnham","1st Vice: Tonya Bennett","2nd Vice: Rebecca Corkum","3rd Vice: Caitlyn Brown","Secretary: Carol Auspland","Americanism: Kim Morse","Scholarship: C. Haley","Hospital: Sharon Ferrar","Chaplain: Kim Morse","SEC Rep: Tracy Burnham","Ways & Means: Pam Dobson"]);

map2.set("num", "2");
map2.set("address", "148 North Rd, Yarmouth, ME 04096");
map2.set("phone", "(207) 846-9644");
map2.set("officers", ["Amvets Commander: Peter Sawyer"]);
map2.set("sons", ["Sons Commander: Danny Connolly"]);
map2.set("aux", ["Auxiliary President: Nikki Randall"]);

map13.set("num", "13");
map13.set("address", "1049 Royalsbourough Rd, Durham, ME 04222");

map3.set("num", "3");
map3.set("address", "169 School St, Sanford, ME 04073");
map3.set("phone", "(207) 324-1661");

map2001.set("num", "2001");
map2001.set("address", "Augusta, ME");