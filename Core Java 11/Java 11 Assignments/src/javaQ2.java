// Java program to demonstrate that
// var cannot be used as a Generic
// type
  
import java.util.ArrayList;
class javaQ2 {
    public static void main(String[] args)
    {
        var<var> al = new ArrayList<>();
            
       
        al.add(40);
        al.add(80);
        al.add(20);
        
        
        System.out.println(al);
    }
}