// program showing the concept of String
class StringDemo1{
    public static void main(String args[]){
        // by String literal 
        String s1 = "Andrew";
        System.out.println("s1 by string literal : "+s1);

        // by new keyword
        String s2 = new String("Andrew");
        System.out.println("s2 by new keyword : "+s2);

        // by character array
        char ch[]={'A','n','d','r','e','w'};
        String s3 = new String(ch);
        System.out.println("s3 by character array : "+s3);

        byte bt[] = {65,66,67,68,69,70};
        String s4 = new String(bt);
        System.out.println("s4 : "+s4);
    }
}