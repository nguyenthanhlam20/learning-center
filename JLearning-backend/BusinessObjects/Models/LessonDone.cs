﻿using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class LessonDone
    {
        public int LessonId { get; set; }
        public string Email { get; set; } = null!;
        public int CourseId { get; set; }

        public virtual Course Course { get; set; } = null!;
        public virtual Account EmailNavigation { get; set; } = null!;
        public virtual Lesson Lesson { get; set; } = null!;
    }
}
