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
postInfo.set("Department of Maine", mapdep)
postInfo.set("25", map25)


mapdep.set("officers", ["Commander: Lewis Auspland","1st Vice: Henry Peters Jr","2nd Vice: Joy Haddad","Executive Director: Rod Anderson","Finance Officer: Paul Anderson","Judge Advocate: Richard Paiement","NEC: Jim Laflin","Service Foundation President: Gene Foster","Convention Corporation: Lionel Lamontagne","Legislative Officer: Kelley Winn","VAVS Rep: Heather Burr","Chaplain: Charles McGillicuddy","Provost Marshal: Bill Greene"]);
mapdep.set("aux", ["President: Connie Cordell, 207-500-1417, ccordell150@gmail.com", "1st Vice President: Marlene Walker, 207-578-2307, marlene_5830@hotmail.com", "2nd Vice President: Sarah Roy, 207-320-8456, roysarah22@gmail.com", "3rd Vice President: Caitlyn Brown, 207-653-8006, caitlynbrownpost25@gmail.com", "Treasurer: Deborah Tardif, 207-500-3683, deborah.tardif@yahoo.com", "Secretary: Pam Sawyer, 207-239-6910, pamnap2583@gmail.com", "National Executive Committee Woman: Lisa Stoddard, 207-233-5801, lstodda2@gmail.com", "Americanism Officer: Nicole Shipp, 207-841-1218, Jimnic@myfairpoint.net", "Scholarship Officer: Jennifer Doten, 207-671-4188, jd36886@gmail.com", "Hospital Officer: Pam Sawyer, 207-239-6910, pamnap2583@gmail.com", "Chaplain: Pam Sawyer, 207-239-6910, pamnap2583@gmail.com", "Parliamentarian: Lisa Stoddard, 207-233-5801, lstodda2@gmail.com", "Ways and Means: Tracy Burnham, 207-383-6172, tracyburnham11@gmail.com", "Sargeant at Arms: Mackenzie Walker, 207-860-0858, mkwalker2302@gmail.com", "Honors and Awards Chairman: Lisa Stoddard, 207-233-5801, lstodda2@gmail.com", "Convention Chairman: Lisa Stoddard, 207-233-5801, lstodda2@gmail.com"]);

map25.set("num", "25");
map25.set("address", "186 Washington Ave, Portland, ME 04101");
map25.set("phone", "(207) 772-9577");
map25.set("officers", ["Amvets Commander: Lawrance Bowie","1st Vice: Bob Goan","Finance Officier: Lewis Auspland","Judge Advocate / PDC: Richard Paiement","2nd Vice / Adjutant: Lewis Auspland","Trustees E-Board: Terrence McGuinness, James Connolly, Gene Connolly"]);
map25.set("sons", ["Sons Commander: Tim Wilson","1st Vice: Khris Berry","2nd Vice: John Burnham","3rd Vice: Corey Dame","Finance Officer: Tony Myatt","Adjutant: Bobby Jensen","Judge Advocate: Pat Seely","Provost: Chip Grindle","Chaplain: Stephen Burnham","Sons Liason: Lewis Auspland"]);
map25.set("aux", ["Auxiliary President: Tracy Burnham","1st Vice: Tonya Bennett","2nd Vice: Rebecca Corkum","3rd Vice: Caitlyn Brown","Secretary: Krista Jensen","Americanism: Kim Morse","Scholarship: C. Haley","Hospital: Sharon Ferrar","Chaplain: Kim Morse","SEC Rep: Tracy Burnham","Ways & Means: Pam Dobson"]);