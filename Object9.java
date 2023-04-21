// program showing the concept of getClass() method

class Object9{
    public static void main(String args[]){
        //Object9 obj = new Object9();
        Object obj = new String();

        //Class c = obj.getClass();
        //System.out.println("signature : "+c);
        System.out.println("signature : "+obj.getClass());
        System.out.println("class name : "+obj.getClass().getName());
    }
}
