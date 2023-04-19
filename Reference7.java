// program showing the concept of Predicate
import java.util.function.Predicate;
class Reference7{
    public static void main(String args[]){
    Predicate<Integer> lessThan = i -> i<=100;
    System.out.println("Result : "+lessThan.test(45));
    System.out.println("Result : "+lessThan.test(145));
    System.out.println("Result : "+lessThan.negate().test(45));
    
    Predicate<String> str = Predicate.isEqual("Andrew Anderson");
    System.out.println("Result : "+str.test("Andrew Anderson"));
    System.out.println("Result : "+str.test("andrew anderson"));

    Predicate<Integer> lessThan1 = i -> i<=100;
    Predicate<Integer> greaterThan1 = i -> i>=100;
    System.out.println("Result : "+lessThan1.and(greaterThan1).test(75));
    System.out.println("Result : "+lessThan1.or(greaterThan1).test(110));
    
    }
}

// void show(int i)
// {
//     if(i<=100)
// }

/*
Methods of PREDICATE : 

1) test
2) and
3) or
4) negate
5) isEqual
*/