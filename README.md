##ELEC 490 project: 
#creating a breast examination simulator using the novint flacon haptic device

#About
This is the code base for the robotics based medical simulator started by 
Emily Heffernan, Syafiqah Rudeen, and Shane Kennedy. The simulator creates 
a virtual environment for the user to interact with through the novint
falcon haptic device. The simulated operation/procedure is a breast 
examination.

#Dependencies
This simulator was built by modifying examples at chai3d.org. For windows/linux
users, please consult this website for build instructions. For Mac users,
this code is fully built and ready to work with. Below are the dependencies.

-XCode (Mac) This is used to build the executable files
-Nodejs and npm our GUI was built using web technologies because it was what
we were familliar with at the time and due to time constraints.

#Running
The simulator executable can be found in /modules/GEL/bin/mac-86_64/03-GEL and
the main code file can be found at /modules/GEL/examples/GLFW/03-GEL/03-GEL-duck.cpp

To run the full project as intended, run the server at /webapp/index.js by opening
a terminal in this directory and running node index

The application will be listening on port 3000, to visit this open a browser
and type localhost:3000 in the url bar. From here choose the Breast Palpation 
option from the dropdown menu and proceed to the end of the application where
the simulation executable will be launched in a separate window.

