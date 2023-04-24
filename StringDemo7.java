// program showing the concept of String
class StringDemo7{
    public static void main(String args[]){
        String s1 = new String("Andrew");
        String s2 = new String("Andrew");

        System.out.println("s1==s2 : "+(s1.intern()==s2.intern()));
        System.out.println("s1 hashCode : "+s1.hashCode());
        System.out.println("s2 hashCode : "+s2.hashCode());

      }
}