// program showing the concept of String
class StringDemo2{
    public static void main(String args[]){
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = "Welcome";
        String s4 = new String("Hello");
        String s5 = new String("Hello");
        String s6 = new String("Welcome");
        
        System.out.println("s1.equals(s2) : "+s1.equals(s2));
        System.out.println("s1.equals(s3) : "+s1.equals(s3));
        System.out.println("s1.equals(s4) : "+s1.equals(s4));
        System.out.println("s4.equals(s5) : "+s4.equals(s5));
        System.out.println("s4.equals(s6) : "+s4.equals(s6));
        System.out.println("s1.equals(s6) : "+s1.equals(s6));
      }
}