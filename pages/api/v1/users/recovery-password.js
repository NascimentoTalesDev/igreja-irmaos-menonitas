import { mongooseConnect } from "@/lib/mongoose";
import nodemailer from "nodemailer"
import bcrypt from "bcrypt"
import { User } from "@/models/User";
import formatName from "@/lib/formatName"

export default async function RecoveryPassword(req, res, next) {
    await mongooseConnect();
    const { method } = req;

    if (method === "POST") {

        const { email } = req.body
        if (!email) return res.status(400).json({ message: { type: "error", data: "Email não pode ficar vazio" } })
        if (!email.includes("@")) return res.status(400).json({ message: { type: "error", data: "Entre em contado com administrador do sistema" } })

        const text = "A1B2C3"
        const newPass = await bcrypt.hash(text, 12)

        try {
            const user = await User.findOne({ email: email })
            if (!user) return res.status(400).send({ message: { type: "error", data: "Usuário não encontrado" } })

            const newHash = await bcrypt.hash(newPass, 12)

            user.password = newHash
            await user.save()

            const message = `
            <table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                <tbody>
                    <tr>
                        <td align="left" valign="middle" bgcolor="#ffffff" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:30px;line-height:normal;color:#002c63;font-weight:bold;text-decoration:none">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:24px;line-height:normal;color:#40444d;font-weight:bold;text-decoration:none">
                                        <img src="https://ofertinhasdacami.s3.amazonaws.com/1706036362215.png" alt="B3, a bolsa do Brasil" width="600" height="92" style="display:block;border:0px solid;font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:24px;line-height:normal;color:#40444d;font-weight:bold;text-decoration:none" border="0" class="CToWUd" data-bit="iit">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                  </tr>
                  <tr>
                  <td width="600" align="center" valign="top" bgcolor="#ffffff" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:13px;line-height:normal;color:#00b0e6;font-weight:normal"><table width="100%" border="0" cellspacing="0" cellpadding="30">
                <tbody>
                <tr>
                  <td bgcolor="#ffffff"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td align="left" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:18px;line-height:150%;color:#666e7a;font-weight:normal;text-decoration:none;padding-left:23px;padding-right:23px;padding-top:30px;padding-bottom:10px">
                            <strong> Olá, ${formatName(user?.name)}.</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td align="left" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:15px;line-height:150%;color:#666e7a;font-weight:normal;text-decoration:none;padding-left:23px;padding-right:23px;padding-top:10px;padding-bottom:20px">
                            <br>
                            <strong> Informações de segurança</strong>
                            <br>
                            <br>
                            Identificamos que solicitou a redefinição de senha.
                            <br>
                            <br>
                            <strong> Para redefinir a sua senha é só clicar no botão abaixo e criar uma nova senha.</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                   </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          
          
          <tr>
            <td align="center" valign="top" bgcolor="#FFFFFF" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:13px;line-height:normal;color:#00b0e6;font-weight:normal;padding-bottom:20px">
              <table border="0" align="center" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td height="48" align="center" bgcolor="#FFBD59" style="border-radius:99px;padding-left:48px;padding-right:48px;padding-top:0;padding-bottom:0">
                      <a href='https://igreja-irmaos-menonitas.vercel.app/new-password?token=${newPass}&email=${user?.email}' style="font-size:12px;font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-weight:bold;color:#0F1F3B;letter-spacing:1.5px;line-height:22px;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://u18191219.ct.sendgrid.net/ls/click?upn%3DCMMpowmJJVQHKgPG1Yjj3w-2F1s3hT1e976mLjayHL22rh8dPBvJUOsaqfVssjM9Rr6zDV_-2B7zOgAJFAmnMnR1D9ftebllkY7P8VZ7D3vpEA95MMjAfTYiZptyo48pgirt-2BgPlH-2FqLgzkQqqk0BELXrYPZWv8ozp440h8qokyFQXiESrXZZCR5ocY0Fnsdjq-2F9CAPVhwvPOvAPwGAJMRySNEtLsEuJTRXrCqkV4RJwxrGzLfeQUQObj2l4C0NoO6K59HU3t0Nqx-2FM4CvB9tH-2FtPIGRncShQLQOWUA0l0kai0ev-2BqeU-3D&amp;source=gmail&amp;ust=1702064916680000&amp;usg=AOvVaw0Z_agAXGRuXaj4wMffJ_Yv">
                        REDEFINIR SENHA
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

		      <tr>
            <td width="600" align="center" valign="top" bgcolor="#ffffff" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:13px;line-height:normal;color:#00b0e6;font-weight:normal"><table width="100%" border="0" cellspacing="0" cellpadding="30">
                <tbody>
                  <tr>
                    <td bgcolor="#ffffff">
                      <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">

                      </table>
                      <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                            <td align="left" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:15px;line-height:150%;color:#666e7a;font-weight:normal;text-decoration:none;padding-left:23px;padding-right:23px;padding-top:0px;padding-bottom:30px">
                              Se você não solicitou a redefinição de senha, entre em contato com o suporteofertinhasdacami@gmail.com .
                              <br>
                              <br>
                              <strong> Conte com a Ofertinhas da Cami.</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" valign="top" bgcolor="#002c63" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:13px;line-height:normal;color:#00b0e6;font-weight:normal">
              <table width="100%" border="0" cellspacing="0" cellpadding="30">
                <tbody>
                  <tr>
                    <td>
                      <table border="0" align="left" cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                            <td height="58" align="center" valign="middle" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:13px;line-height:150%;color:#ffffff;font-weight:normal;text-decoration:none;padding-left:23px;padding-right:23px">
                                acesse 
                                <a href="https://www.ofertinhasdacami.com.br" style="color:#4fc3f6;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://u18191219.ct.sendgrid.net/ls/click?upn%3DCMMpowmJJVQHKgPG1Yjj3w-2F1s3hT1e976mLjayHL22rh8dPBvJUOsaqfVssjM9RrM1NU_-2B7zOgAJFAmnMnR1D9ftebllkY7P8VZ7D3vpEA95MMjAfTYiZptyo48pgirt-2BgPlH-2FqLgzkQqqk0BELXrYPZWv2P2CiIPufuMBgnpM5bDIkxyYNyCISd3q3M3s4JF7MfTUUeAns-2BoWUEeNJ2Y4XaxIG93Mxa8-2F5biKMlTz2TPYy89HZ2ayKHrmEXTOzjPpJTpPef3MtsIyuy7by65IwODQt-2BSlyXp8Axz1XMzompHlQU-3D&amp;source=gmail&amp;ust=1702064916680000&amp;usg=AOvVaw3aJMlcrfPhsFjvaRjmtJNd">
                                  Ofertinhasdacami.com.br
                                </a>
                             </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="width:179px;height:48px" border="0" cellspacing="0" cellpadding="4" align="right" bgcolor="#002272">
                        <tbody>
                          <tr style="height:7px" bgcolor="#002272">
                            <td width="10" align="center" bgcolor="#002C63"></td>
                            <td align="center" bgcolor="#002C63" style="width:26.0156px;height:7px"><a href="https://www.instagram.com/ofertinhasdacami" rel="noopener" target="_blank" data-saferedirecturl="https://www.instagram.com/ofertinhasdacami"><img src="https://ci3.googleusercontent.com/meips/ADKq_NZHg401-Fk3Y4RkmcOQu0w5TNCdeaOvHAcaZ1yW0cCkMb34yZVSruvnSV52U8x9wPO1tYKRj_ZZVhl9kCxYBmiF8qPIs0ECR-Qst5n0qktWON4xKCcJclWkJk1RDzWuktaC=s0-d-e1-ft#https://d335luupugsy2.cloudfront.net/cms/files/83534/1658862913/$5s0bi1ykhz3" alt="Instagram" width="50" height="50" style="border:0" border="0" class="CToWUd" data-bit="iit"></a></td>
                            <td align="center" bgcolor="#002C63" style="width:26.0156px;height:7px"><a href="" rel="noopener" target="_blank" data-saferedirecturl=""><img style="border-width:0px;border-style:solid;color:#ffffff" src="https://ci3.googleusercontent.com/meips/ADKq_NZgrOhBLYOpMwsJVwAV_zcjihiHBQPnNur0LcwriEMknVkgAah6lSeKsjasw2ecFTE9RwTkC7yPlt8abKxO4l5vop0AAbGMdOlQGDhj6SZHEgJ2DQZZMAmvqgqvuXSleoqk=s0-d-e1-ft#https://d335luupugsy2.cloudfront.net/cms/files/83534/1658862913/$e98253hfgrh" alt="Facebook" width="50" height="50" class="CToWUd" data-bit="iit"></a></td>
                            <td align="center" bgcolor="#002C63" style="width:26.0156px;height:7px"><a href="" rel="noopener" target="_blank" data-saferedirecturl=""><img style="border-width:0px;border-style:solid;color:#ffffff" src="https://ci3.googleusercontent.com/meips/ADKq_NYKbodDz2VcVIbBPqhiXxFlH0IoNcbHcISJGGF00qnitR-JS2nfYvUvw00L73l3OeHhJtCFyHIRRcnlc2kSRID7oEUwMAEL1bOezSnImIglV8lUYPUj3XKQugCVeI5C8SJ0=s0-d-e1-ft#https://d335luupugsy2.cloudfront.net/cms/files/83534/1658862913/$t2wybyd49mc" alt="Twitter" width="50" height="50" class="CToWUd" data-bit="iit"></a></td>
                            <td align="center" bgcolor="#002C63" style="width:26.0156px;height:7px"><a href="" rel="noopener" target="_blank" data-saferedirecturl=""><img style="border-width:0px;border-style:solid;color:#ffffff" src="https://ci3.googleusercontent.com/meips/ADKq_NY4YbVik20bJpK265NA0Hkk4noFDoWh_MmV54KYwUkTnkrefnPoyCkkRz1djnDPGC4jFvYEXFuPjre-qtTScRSlbePPvQz3hifvFpf9K_sdvVOBjevO64LLwRHY1KQHBkw=s0-d-e1-ft#https://d335luupugsy2.cloudfront.net/cms/files/83534/1658862913/$m3nh9zh79h" alt="LinkedIn" width="50" height="50" class="CToWUd" data-bit="iit"></a></td>
                            <td align="center" bgcolor="#002C63" style="width:26.0156px;height:7px"><a href="" rel="noopener" target="_blank" data-saferedirecturl=""><img style="border-width:0px;border-style:solid;color:#ffffff" src="https://ci3.googleusercontent.com/meips/ADKq_NZ-McXOc3YSwH68FJtb1Tl62ijozqEHMfVOy2rPTUAroBRe0dms3OQVHKzbVns7choTvQC43IVo4qzowqND0SiG14c4dmuClYuGZ03b8xGR2bKFQB0eIcQKsXhfZd-fbvZj=s0-d-e1-ft#https://d335luupugsy2.cloudfront.net/cms/files/83534/1658862913/$quypv4kamom" alt="YouTube" width="50" height="50" style="border:0" border="0" class="CToWUd" data-bit="iit"></a></td>
                            <td width="10" align="center" bgcolor="#002C63"></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          

          <tr>
            <td align="center" valign="top" bgcolor="#ffffff" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:13px;line-height:normal;color:#00b0e6;font-weight:normal">
              <table width="100%" border="0" cellspacing="0" cellpadding="20">
                <tbody>
                  <tr>
                    <td bgcolor="#042550">
                      <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                            <td align="center" valign="middle" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:15px;line-height:150%;color:#ffffff;font-weight:normal;text-decoration:none;padding-left:23px;padding-right:23px">
                              <a href="https://u18191219.ct.sendgrid.net/ls/click?upn=CMMpowmJJVQHKgPG1Yjj3w-2F1s3hT1e976mLjayHL22oMW-2BK8zCgEKy9lLcksJiy9673Dp5w3KwKiw0GSkEj51GqG-2FV8C-2FC95LEpsldds1k4-3DRlHU_-2B7zOgAJFAmnMnR1D9ftebllkY7P8VZ7D3vpEA95MMjAfTYiZptyo48pgirt-2BgPlH-2FqLgzkQqqk0BELXrYPZWv0SrCTWlNmBSUdFiwbzHZzFkIqu4clLlTNORq8xLuMdrnQwcIkNKW79VVK5O5hpPrhV4cokQgz4sHXVid3-2FbDxWhPj0ybXiLX-2FM7FyRQgpppOGjLjXnCERTm1fYGGyps7NG9eDgIHvo28X-2FHE7xJ-2B8Q-3D" style="color:#F2F2F2;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://u18191219.ct.sendgrid.net/ls/click?upn%3DCMMpowmJJVQHKgPG1Yjj3w-2F1s3hT1e976mLjayHL22oMW-2BK8zCgEKy9lLcksJiy9673Dp5w3KwKiw0GSkEj51GqG-2FV8C-2FC95LEpsldds1k4-3DRlHU_-2B7zOgAJFAmnMnR1D9ftebllkY7P8VZ7D3vpEA95MMjAfTYiZptyo48pgirt-2BgPlH-2FqLgzkQqqk0BELXrYPZWv0SrCTWlNmBSUdFiwbzHZzFkIqu4clLlTNORq8xLuMdrnQwcIkNKW79VVK5O5hpPrhV4cokQgz4sHXVid3-2FbDxWhPj0ybXiLX-2FM7FyRQgpppOGjLjXnCERTm1fYGGyps7NG9eDgIHvo28X-2FHE7xJ-2B8Q-3D&amp;source=gmail&amp;ust=1702064916680000&amp;usg=AOvVaw1BDKHdRJAzdOBMMfXLDhdj">Política e Termos</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

            <tr>
              <td height="10" align="center" valign="top" bgcolor="#FFBD59" style="font-family:'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:13px;line-height:normal;color:#00b0e6;font-weight:normal;height:10px"> </td>
            </tr>
          </tbody>
        </table>
        `

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "nascimentotalesdev@gmail.com",
                    pass: "uiofswaplqzkbund"
                }
            })
            transporter.sendMail({
                from: "Igreja Irmaos Menonitas <nascimentotalesdev@gmail.com>",
                to: email,
                subject: "Redefinir senha",
                html: message
            })
                .then(() => res.send({ message: { type: "success", data: "Email de recuperação enviado" } }))
                .catch((err) => res.send({ err, message: { type: "Error", data: "Falha no envio do email." } }))

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: { type: "error", data: "Aconteceu um erro inesperado" } })
        }
    }
}