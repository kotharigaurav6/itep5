// program showing the concept of String
class StringDemo8{
    public static void main(String args[]){
        String s1 = "Andrew";
        String s2 = "Anderson";
        String var = " ";
        String s3 = "Andrew Anderson";
       // String s4 = s1+" "+s2;
        String s4 = s1+var+s2;
       //  String s4 = (s1+var+s2).intern();

        System.out.println("s3 : "+s3);
        System.out.println("s4 : "+s4);

        System.out.println("s3 : "+s3.hashCode());
        System.out.println("s4 : "+s4.hashCode());

        System.out.println("s3==s4 : "+(s3==s4));

      }
}