//iimport ito ni api/project/route
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(              //ProjectSchema we creating form  or template no database
  {
    title: String,
    description: String,
    githubLink: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const Project =                             // when we write this, we create Project models
    mongoose.models.Project ||      //"May existing Project model na ba?"
    mongoose.model(                 //Ito naman ang gumagawa ng bagong model.
    "Project",          //Yung "Project" ang pinangalan mo sa Model.
     ProjectSchema
    );                                      
                                                                                            // ano ang kayang gawin nang model
export default Project;
                                                                                            // Mag-save
                                                                                            // await Project.create({
                                                                                            //     title: "Portfolio"
                                                                                            // });

                                                                                            // Maghanap
                                                                                            // await Project.find();


                                                                                            // await Project.findById(id);
                                                                                            // Parang
                                                                                            // "Hanapin mo itong project."

                                                                                            // Update
                                                                                            // await Project.findByIdAndUpdate(id);

                                                                                            // Delete
                                                                                            // await Project.findByIdAndDelete(id);


