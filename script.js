function makeid(l) {
	let ans = "";
	let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

	for(let i = 0;i<l;i++){
		ans += char_list.charAt(
			Math.floor(
				Math.random()*char_list.length
			)
		)
	}

	return ans;
}

const l = prompt("Enter a number.");
alert(makeid(l));
