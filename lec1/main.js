//                     პრაქტიკა
// ============================================================

// 1) let fullName = "Lika Mamaladze" -> "L.M."
let fullName = "Lika Mamaladze";
let parts = fullName.split(" ");
let initials = parts[0][0] + "." + parts[1][0] + ".";
console.log(initials); // "L.M."

// 2) trim + lowercase + "@" შემოწმება
let email = " EXAMPLE@MAIL.COM ";
let cleanEmail = email.trim().toLowerCase();
console.log(cleanEmail); // "example@mail.com"
console.log(cleanEmail.includes("@")); // true

// 3) ბოლო ასოს ამოღება + upperCase
let str = "luka";
let lastLetter = str[str.length - 1].toUpperCase();
console.log(lastLetter); // "A"

// 4) FooBar (1-დან 100-მდე)
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FooBar");
  } else if (i % 3 === 0) {
    console.log("Foo");
  } else if (i % 5 === 0) {
    console.log("Bar");
  } else {
    console.log(i);
  }
}

// 5) "stupid" -> "s****d"
let text = "JS is stupid but sometimes cool";
let censored = text.replace("stupid", "s****d");
console.log(censored); // "JS is s****d but sometimes cool"

// ============================================================
//                       თეორია
// ============================================================

/*
  1) რამდენი ცვლადი გვაქვს JavaScript-ში?
     JavaScript-ში გვაქვს 3 სახის ცვლადი:
       - var   →ძველი, function-scoped, hoisting-ით
       - let   → თანამედროვე, block-scoped, შეიძლება გადაწეროს
       - const → თანამედროვე, block-scoped, ვერ გადაიწერება (re-assign არ შეიძლება)


  2) რამდენი ტიპი გვაქვს JavaScript-ში?
     JavaScript-ში გვაქვს 8 ტიპი:
     პრიმიტიული (7):
       1. String      → "hello"
       2. Number      → 42, 3.14
       3. Boolean     → true / false
       4. Undefined   → ცვლადი გამოცხადებულია, მაგრამ მნიშვნელობა არ აქვს
       5. Null        → განზრახ ცარიელი მნიშვნელობა
       6. BigInt      → ძალიან დიდი მთელი რიცხვები (42n)
       7. Symbol      → უნიკალური იდენტიფიკატორი
     რეფერენსული (1):
       8. Object      → {}, [], function() {}


  3) რომელი მეთოდი აქცევს სტრინგს მასივად?
     split() მეთოდი — სტრინგს ყოფს მითითებული გამყოფით და აბრუნებს მასივს.
     მაგ: "hello".split("") → ["h","e","l","l","o"]
          "a,b,c".split(",") → ["a","b","c"]


  4) სტრინგი პრიმიტიული ტიპია თუ არა?
     დიახ, სტრინგი პრიმიტიული ტიპია.
     თუმცა JavaScript ავტომატურად "ახვევს" მას String ობიექტში (autoboxing),
     როდესაც მასზე მეთოდს ვიძახებთ (მაგ: .toUpperCase()), ამიტომ
     სტრინგზე შეგვიძლია მეთოდების გამოყენება, მიუხედავად იმისა, რომ ის პრიმიტიულია.


  5) რა მეთოდები ვისწავლეთ:
     - .length             → სიმბოლოების რაოდენობა
     - .toUpperCase()      → ყველა ასო დიდად
     - .toLowerCase()      → ყველა ასო პატარად
     - .trim()             → სფეისების მოცილება თავიდან და ბოლოდან
     - .includes()         → შეიცავს თუ არა მოცემულ სტრინგს (true/false)
     - .indexOf()          → პოულობს სიმბოლოს/სტრინგის პოზიციას
     - .split()            → სტრინგს ყოფს და მასივს აბრუნებს
     - .replace()          → ცვლის ერთ მნიშვნელობას მეორეთი
     - .slice()            → ჭრის სტრინგს (start, end)
     - [index]             → კონკრეტული სიმბოლოს მიღება ინდექსით
*/
