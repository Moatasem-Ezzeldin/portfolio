// Dashboard.jsx
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProject, updateProject, deleteProject } from "../../redux/projectsSlice";
import { logout } from "../../redux/authSlice";
import {Card} from '../index'
import { motion } from "framer-motion";


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    visit_link: "",
    code_link: "",
  });
  // dashboard
  const projects = useSelector((state) => state.projects.data);
  const loadingFetch = useSelector((state) => state.projects.loadingFetch);
  const loadingAdd = useSelector((state) => state.projects.loadingAdd);
  const loadingUpdate = useSelector((state) => state.projects.loadingUpdate);
  const loadingDelete = useSelector((state) => state.projects.loadingDelete);
  const errorFetch = useSelector((state) => state.projects.errorFetch);
  const errorAdd = useSelector((state) => state.projects.errorAdd);
  const errorUpdate = useSelector((state) => state.projects.errorUpdate);
  const errorDelete = useSelector((state) => state.projects.errorDelete);

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

  // close list on click out hir
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false); // يغلق القائمة
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  // Form Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setImagePreview("");
    }
  };
  const resetForm = () => {
    setFormData({ title: "", description: "", category: "", visit_link: "", code_link: "" });
    setImageFile(null);
    setImagePreview("");
    setEditingId(null);
  };
  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      visit_link: project.visit_link,
      code_link: project.code_link,
    });
    setImagePreview(project.image_url);
    setEditingId(project.id);
  };
  const handleDelete = (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المشروع؟")) {
      dispatch(deleteProject(id))
      .unwrap()
      .then(() => {
        alert("yes, delete project");
      })
      .catch(() => {
        alert("! no, delete project");
      });
    }
  };

  // Submit (Add / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("يرجى تعبئة الحقول الأساسية");
      return;
    }
    setSubmitting(true);

    let imageUrl = "";
    if (imageFile) {
      const cloudData = new FormData();
      cloudData.append("file", imageFile);
      cloudData.append("upload_preset", uploadPreset);
      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
          method: "POST",
          body: cloudData,
        });
        const data = await res.json();
        imageUrl = data.secure_url;
      } catch (err) {
        console.error("خطأ رفع الصورة:", err);
        alert("فشل رفع الصورة");
        return;
      }
    }

    const projectData = { ...formData, image_url: imageUrl || imagePreview };

    if (editingId) {
      // ⚡️ تعديل المشروع
      dispatch(updateProject({ id: editingId, project: projectData }))
        .unwrap()
        .then(() => {
          setSubmitting(false);
          resetForm();
          alert("yes, update project");
        })
        .catch(() => {
          setSubmitting(false);
          alert("no, update project");
        });
    } else {
      // ⚡️ إضافة مشروع جديد
      dispatch(addProject(projectData))
        .unwrap()
        .then(() => {
          setSubmitting(false);
          resetForm();
          alert("yes, add project");
        })
        .catch(() => {
          setSubmitting(false);
          alert("no, add project");
        });
    }
    resetForm();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto  text-black">
        <div className="flex-center flex-col gap-3 mt-4 sm:mt-0 sm:flex-row sm:flex-between sm:mb-4">
          <h1 className="text-3xl p-6 pb-0 font-bold text-[var(--cyan)] mt-[-25px]">🛠 Dashboard</h1>
          <div className="flex gap-4 px-6 sm:pt-6">
            <Link
              className="w-[4rem] cursor-pointer flex-center mb-8 text-white p-4 bg-[var(--cyan)] transition-300
            hover:bg-[var(--cyan-light)] text-[1rem] rounded-[30px] py-3
             shadow-[0_3px_10px_rgba(20. 184, 166, 0.3)] hover:shadow-[0_5px_15px_rgba(20. 184, 166, 0.5)]"
              to="/"
            >
              Home
            </Link>
            <button
              className="w-[4rem] mb-8 text-white p-4 bg-[var(--cyan)] transition-300 
              hover:bg-[var(--cyan-light)] text-[1rem] rounded-[30px] py-3
              shadow-[0_3px_10px_rgba(20. 184, 166, 0.3)] hover:shadow-[0_5px_15px_rgba(20. 184, 166, 0.5)]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[600px]  px-6 space-y-5 text-white border-1 border-solid
            border-[var(--border)] shadow-[3px_3px_10px_var(--cyan-shadow-hover)] rounded-[10px]"
          >
            <h2 className="text-[1rem] font-semibold md:text-[1.5rem] text-center my-6 text-[var(--cyan-light)]">
              Hello Moatasem, Add projects for your Portfolio
            </h2>

            {/* Title */}
            <div className="flex-col-center">
              <label htmlFor="title" className=" cursor-pointer block mb-2 font-medium text-[1.3rem] text-[var(--title)]">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleChange}
                className="w-[80%] max-w-[30rem]  transition-300 px-3 py-2 rounded-[16px] text-[var(--cyan)] 
                placeholder:text-[var(--subtitle)]
                hover:shadow-[inset_5px_5px_14px_var(--cyan-shadow)] border-1 border-solid border-[var(--border)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]"
                required
              />
            </div>

            {/* Description */}
            <div className="flex-col-center">
              <label htmlFor="desc" className="cursor-pointer block mb-2 font-medium text-[1.3rem] text-[var(--title)]">
                Description
              </label>
              <textarea
                name="description"
                id="desc"
                type="text"
                placeholder="Project Description"
                value={formData.description}
                onChange={handleChange}
                className="w-[80%] max-w-[30rem]  transition-300 px-3 py-2 rounded-[16px] text-[var(--cyan)] 
                placeholder:text-[var(--subtitle)] resize-y
                hover:shadow-[inset_5px_5px_14px_var(--cyan-shadow)] border-1 border-solid border-[var(--border)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]"
                required
              />
            </div>

            {/* Category */}
            <div ref={ref} className="flex-col-center relative">
              <label htmlFor="cate" className="cursor-pointer block mb-2 font-medium text-[1.3rem] text-[var(--title)]">
                Category
              </label>

              {/* Input للعرض فقط */}
              <div className="relative w-[85%] max-w-[30rem] flex-center">
                <input
                  type="text"
                  name="category"
                  id="cate"
                  placeholder="Choose Category"
                  value={formData.category}
                  readOnly
                  onClick={() => setOpen(prev => !prev)} // فتح / غلق القائمة عند الضغط
                  className="w-full px-3 py-2 rounded-[16px] text-[var(--cyan)] placeholder:text-[var(--subtitle)] 
                  border-1 border-solid border-[var(--border)] shadow-[inset_2px_2px_10px_var(--cyan-shadow)] 
                  cursor-pointer hover:shadow-[inset_5px_5px_14px_var(--cyan-shadow)] 
                  focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)] transition-300"
                />

                {/* السهم */}
                <button
                  type="button"
                  onClick={() => setOpen(prev => !prev)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-[var(--cyan)]"
                >
                  ▼
                </button>
              </div>

              {/* Dropdown قائمة مع transition سلس */}
              <div
                className={`w-[80%] mt-3 max-w-[30rem] text-[var(--cyan)] border-1 border-solid border-[var(--border)]
                rounded-[16px] shadow-[inset_2px_2px_10px_var(--cyan-shadow)] bg-[rgba(0,0,0,0.05)] 
                transition-all duration-300 overflow-hidden ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                {["vanilla", "react", "next"].map((opt) => (
                  <div
                    key={opt}
                    onClick={() => handleChange({ target: { name: "category", value: opt } }) || setOpen(false)}
                    className="px-3 py-2 cursor-pointer hover:bg-[rgba(20,184,166,0.15)] border-b 
                    border-[var(--border)] last:border-b-0"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Link */}
            <div className="flex-col-center">
              <label htmlFor="visit" className="cursor-pointer block mb-2 font-medium text-[1.3rem] text-[var(--title)]">
                Visit Link
              </label>
              <input
                id="visit"
                type="url"
                name="visit_link"
                placeholder="Project Show Link"
                value={formData.visit_link}
                onChange={handleChange}
                className="w-[80%] max-w-[30rem]  transition-300 px-3 py-2 rounded-[16px] text-[var(--cyan)] 
                placeholder:text-[var(--subtitle)]
                hover:shadow-[inset_5px_5px_15px_var(--cyan-shadow)] border-1 border-solid border-[var(--border)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]"
              />
            </div>

            {/* GitHub Link */}
            <div className="flex-col-center">
              <label htmlFor="github" className="cursor-pointer block mb-2 font-medium text-[1.3rem] text-[var(--title)]">
                GitHub Link
              </label>
              <input
                id="github"
                placeholder="Project Code Link"
                type="url"
                name="code_link"
                value={formData.code_link}
                onChange={handleChange}
                className="w-[80%] max-w-[30rem]  transition-300 px-3 py-2 rounded-[16px] text-[var(--cyan)] 
                placeholder:text-[var(--subtitle)]
                hover:shadow-[inset_5px_5px_14px_var(--cyan-shadow)] border-1 border-solid border-[var(--border)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]"
              />
            </div>

            {/* Image */}
            <div className="flex-col-center">
              <label htmlFor="image" className="cursor-pointer block mb-2 font-medium text-[1.3rem] text-[var(--title)]">
                Website Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-[80%] max-w-[30rem]  transition-300 px-3 py-2 rounded-[16px] text-[var(--cyan)] 
                placeholder:text-[var(--subtitle)]
                hover:shadow-[inset_5px_5px_14px_var(--cyan-shadow)] border-1 border-solid border-[var(--border)]
                shadow-[inset_2px_2px_10px_var(--cyan-shadow)] focus:shadow-[inset_-3px_-3px_10px_var(--cyan-shadow-hover)]"
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-3 max-h-48 border rounded mx-auto" />
              )}
            </div>

            {/* Submit button */}
            <button
              disabled={loadingAdd || loadingUpdate}
              type="submit"
              className="w-[80%] text-center block mx-auto max-w-[30rem] mt-8 mb-8 text-white p-4 bg-[var(--cyan)]
              transition-300 disabled:bg-[var(--cyan-disabled)] text-[1rem] rounded-[30px] py-3 hover:bg-[var(--cyan-light)]
               shadow-[0_3px_10px_rgba(20. 184, 166, 0.3)] hover:shadow-[0_5px_15px_rgba(20. 184, 166, 0.5)]"
            >
              {editingId 
              ? (loadingUpdate ? "Loading Update" : "Update Project") 
              : (loadingAdd ? "Loading Add" : "Add Project")
              }
            </button>
          </form>
        </div>

        {/* Projects List */}
        <div className="mt-10 border-t-1 border-solid border-[var(--border)]">
          <h2 className="text-2xl mt-8 mb-4 font-semibold text-[var(--cyan)] text-center">My Projects</h2>
        </div>
        {errorFetch && 
          <div className="flex-center mb-16">
            <p className="text-[var(--subtitle)] text-[1.2rem]">error in fetch data from API</p>
          </div>
        }
        {projects.length === 0 && !loadingFetch && !errorFetch &&
          <div className="flex-center mb-16">
            <p className="text-[var(--subtitle)] text-[1.2rem]">no projects in database</p>
          </div>
        }
        {projects.length > 0 &&
          <div className="mx-[1rem] overflow-x-auto mb-16">
            <div className="flex gap-2 p-8 ">
              {projects.map((item)=> (
                <div key={item.id} className="flex-shrink-0">
                  <Card handleEdit = {handleEdit} handleDelete = {handleDelete} page="dashboard" key={item.id} item={item} />
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </motion.div>
  );
};

export default Dashboard;