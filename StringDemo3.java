// program showing the concept of String
class StringDemo3{
    public static void main(String args[]){
        String s1 = "Hellow";
        String s2 = "Hello";
        String s3 = "Welcome";
        String s4 = new String("Hello");
        String s5 = new String("Hello");
        String s6 = new String("Welcome");
        
        System.out.println("s1.compareTo(s2) : "+s1.compareTo(s2));
        System.out.println("s1.compareTo(s3) : "+s1.compareTo(s3));
        System.out.println("s1.compareTo(s4) : "+s1.compareTo(s4));
        System.out.println("s4.compareTo(s5) : "+s4.compareTo(s5));
        System.out.println("s4.compareTo(s6) : "+s4.compareTo(s6));
        System.out.println("s1.compareTo(s6) : "+s1.compareTo(s6));
      }
}