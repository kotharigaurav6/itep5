// program showing the concept of String
class StringDemo6{
    public static void main(String args[]){
        String s1 = new String("Andrew").intern();
        String s2 = new String("Andrew").intern();

        System.out.println("s1==s2 : "+(s1==s2));
        System.out.println("s1 hashCode : "+s1.hashCode());
        System.out.println("s2 hashCode : "+s2.hashCode());

      }
}