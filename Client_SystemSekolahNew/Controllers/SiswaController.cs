﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Client_SystemSekolahNew.Controllers
{
    public class SiswaController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult MatpelSiswa()
        {
            return View();
        }
        public IActionResult JadwalSiswa()
        {
            return View();
        }
        public IActionResult NilaiSiswa()
        {
            return View();
        }
        public IActionResult GetById()
        {
            return View();
        }
    }
}

