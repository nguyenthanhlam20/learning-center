
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogServices } from "../services";
import { toast } from 'react-toastify';

export const insertBlog = createAsyncThunk("insert-blog", async (blog) => {
    const response = await blogServices.insertBlog(blog);
    return response;
});
export const updateBlog = createAsyncThunk("update-blog", async (blog) => {
    const response = await blogServices.updateBlog(blog);
    return response;
});
export const deleteBlog = createAsyncThunk("delete-blog", async (blog) => {
    const response = await blogServices.deleteBlog(blog);
    return response;
});
export const getBlogs = createAsyncThunk("get-blogs", async () => {
    const response = await blogServices.getBlogs();
    return response;
});
export const getBlogById = createAsyncThunk("get-blog-byid", async (blog) => {

    const response = await blogServices.getBlogById(blog);
    return response;
});




const blogSlice = createSlice({
    name: "blog",
    initialState: {
        data: [],
        specific: null,
        isRefreshSpecific: false,
        isRefresh: false,
    },
    reducers: {
        setIsRefreshSpecific: (state, action) => {
            state.isRefreshSpecific = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(insertBlog.fulfilled, (state, action) => {
            toast.success("Thêm tin tức thành công");
            state.isRefresh = true;

        });
        builder.addCase(updateBlog.fulfilled, (state, action) => {
            toast.success("Cập nhật tin tức thành công");
            state.isRefresh = true;

        });
        builder.addCase(deleteBlog.fulfilled, (state, action) => {
            toast.success("Xóa tin tức thành công");
            state.isRefresh = true;
        });

        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isRefresh = false;
            // console.log(action.payload);
        });
        builder.addCase(getBlogById.fulfilled, (state, action) => {
            state.specific = action.payload;
            state.isRefreshSpecific = false;

        });


    },
});

export default blogSlice;
