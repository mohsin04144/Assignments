import java.lang.annotation.*;  
import java.lang.reflect.*;  
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;  
@Retention(RetentionPolicy.RUNTIME)  
@Target(ElementType.METHOD)  
@interface test{  
int value();  
}  
  
 
class Hello{  
@test(value=07)  
public void displayMethod()
{
	
	System.out.println("testing annotation");
	}  
}  
  

public class AnnotationAssignmentQ1{  
public static void main(String[] args)throws Exception{  
  
Hello h=new Hello();  
Method m=h.getClass().getMethod("displayMethod");  
  
test manno=m.getAnnotation(test.class);  
System.out.println("value is: "+manno.value());  
}
} 