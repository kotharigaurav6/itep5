// program showing the concept of String
class StringDemo5{
    public static void main(String args[]){
        String s1 = "HELLO";
        String s2 = "hello";
        String s3 = "HELLO";
      //  String s4 = s2.toUpperCase();
          String s4 = s2.toUpperCase().intern();

        System.out.println("s1 hashCode() : "+s1.hashCode());        
        System.out.println("s2 hashCode() : "+s2.hashCode());        
        System.out.println("s3 hashCode() : "+s3.hashCode());        
        System.out.println("s4 hashCode() : "+s4.hashCode());        
      
        System.out.println("s1==s2 : "+(s1==s2));
        System.out.println("s1==s3 : "+(s1==s3));
        System.out.println("s1==s4 : "+(s1==s4));
      }
}