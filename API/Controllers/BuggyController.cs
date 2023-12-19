using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

     public class BuggyController : BaseApiController
 {



    [HttpGet("Bulunamadi")]
    public ActionResult GetNotFound()

    {
    
        return NotFound();
        
    }

        [HttpGet("Geçersizİstek")]
    public ActionResult GetBadRequest()

    {
    
        return BadRequest(new ProblemDetails{Title = "Bu geçersiz bir istektir"});
        
    }

        [HttpGet("Yetkisiz")]
    public ActionResult GetUnauthorised()

    {
    
        return Unauthorized();
        
    }

        [HttpGet("DogrulamaHatasi")]
    public ActionResult GetValidationError()

    {
    
       ModelState.AddModelError("Hata1", "Bu ilk hata mesajıdır");
       ModelState.AddModelError("Hata2", "Bu ikinci hata mesajıdır");
       return   ValidationProblem();
        
    }
    
        [HttpGet("SunucuHatasi")]
    public ActionResult GetServerError()

    {
    
       throw new Exception("Bu sunucu hatasıdır");
        
    }

}
    
}