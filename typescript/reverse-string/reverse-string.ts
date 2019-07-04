class ReverseString {
    static reverse(str: String): String {
        return str.split("").reverse().join("");
    }
}

export default ReverseString;
