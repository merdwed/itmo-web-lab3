import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

import java.io.Serializable;
import java.lang.Exception;
@ManagedBean(name = "coordBean", eager = true)
@SessionScoped
public class CoordBean implements Serializable{
    private static final long serialVersionUID = 1L;
    public CoordBean() {
        System.out.println("CoordBean instantiated");
        coord = new Coord();
        coord.setR("1");
    }
    //@PersistenceContext
   
    Coord coord;
    public void setCoord(Coord cooord){
        this.coord=coord;
    }
    public Coord getCoord(){
        return coord;
    }
   public void check(){
    System.out.println("check started");
    try{
        double dx=Double.parseDouble(coord.getX());
        double dy=Double.parseDouble(coord.getY());
        double dr=Double.parseDouble(coord.getR());
        if((dx>=0 && dx<=dr && dy<=0 && dy>=dr)||
        (dx<=0 && dy>=0 && dx*dx+dy*dy<=dr*dr)||
        (dx>=0 && dy>=0 && dy+dx*2<dr)
        )
        coord.setS("Вы попали");
        else
        coord.setS("Вы промахнулись");
        
        System.out.println("check ended");
        
    }catch(Exception e){
        
        System.out.println("check catch exception");
        System.out.println(e.getMessage());
        }
   }
}