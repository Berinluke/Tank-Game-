class c_Bullet
    {
        constructor (l_x, l_y)
        {
            
        
            this.xpos=l_x;
            this.ypos=l_y;
            this.radius=20;
            this.color="#ff000a";
           
            this.initial_velocity=30;
            this.acceleration=-1;
            
            this.Start_animat_flag=0;
            
            this.xSpeed=20;
            this.ySpeed=this.initial_velocity;
            this.dX = 0;
            this.Fire_Bullet=0;
           
            
        }
        
        m_draw_Bullet(l_context)
        {
            l_context.fillStyle=this.color;
            l_context.beginPath();
            l_context.arc(this.xpos,this.ypos,this.radius,0,2*Math.PI);
            l_context.closePath();
            l_context.fill();
            
        }
       
        m_Border_collision(l_canvas)
        {
        
            if ((this.ypos + this.radius) > l_canvas.height) 
                {
                    this.ypos = l_canvas.height - this.radius;
                    this.Start_animat_flag=0;
                     this.xpos=g_Tank.Center_Xpos;
                    this.ypos=g_Tank.Center_Ypos;
                    
           
                    this.initial_velocity=30;
                    this.acceleration=-1;
            
                    this.Start_animat_flag=0;
            
                    this.xSpeed=20;
                    this.ySpeed=this.initial_velocity;
                    this.dX = 0;
                    this.Fire_Bullet=0;

                    
                    
                }
            if((this.xpos + this.radius) > l_canvas.width)
                {
                    this.xpos=l_canvas.width - this.radius;
                    this.Start_animat_flag=0;
                    this.xpos=g_Tank.Center_Xpos;
                    this.ypos=g_Tank.Center_Ypos;
                    
           
                    this.initial_velocity=30;
                    this.acceleration=-1;
            
                    this.Start_animat_flag=0;
            
                    this.xSpeed=20;
                    this.ySpeed=this.initial_velocity;
                    this.dX = 0;
                    this.Fire_Bullet=0;

                    
                    
                }
            
        }
        m_movement()
        {
            
            if(this.Start_animat_flag==1)
                {
                    this.dX= this.xSpeed* Math.sin(this.Fire_Bullet);
                   if(Math.sign(this.dX)==1)
                        {
                            this.xpos+=(this.dX);
                        }
                    else
                        {
                            this.xpos-=(this.dX);
                            console.log(this.dX);
                        }
                       
                    console.log(this.ySpeed+" ySpeed"+this.xSpeed+"  xspeed");
                     
                   
                     this.ypos-=this.ySpeed;
                     this.ySpeed+=this.acceleration;

                     
                    
                    
                }
            
            
            
        }
         
     
        
    }