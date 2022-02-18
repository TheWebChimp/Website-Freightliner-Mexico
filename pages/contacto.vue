<template>
	<div>
		<div class="block block-hero has-navigation">
		</div>

		<div class="block block-form">
			<div class="inner">
				<div class="m-default">

					<h2 class="block-title">Contacto</h2>

					<form action="">

							<div class="row">
								<div class="col col-sm-3 col-xs-12">
									<div class="form-group">
										<label for="saludo" class="control-label">Saludo <span class="required">*</span></label>
										<select name="saludo" id="saludo" class="input-block form-control" data-validate="required">
											<option value="">Selecciona una</option>
												<option value="Sr.">Sr.</option>
												<option value="Srita.">Srita.</option>
												<option value="Sra.">Sra.</option>
												<option value="Lic.">Lic.</option>
												<option value="Ing.">Ing.</option>
												<option value="C.P.">C.P.</option>
												<option value="Arq.">Arq.</option>
												<option value="Dr.">Dr.</option>
											</select>
									</div>
								</div>
								<div class="col col-sm-3 col-xs-12">
									<div class="form-group">
										<label for="nombre" class="control-label">Nombre <span class="required">*</span></label>
										<input type="text" name="nombre" id="nombre" value="" class="input-block form-control" data-validate="required">
									</div>
								</div>
								<div class="col col-sm-3 col-xs-12">
									<div class="form-group">
										<label for="apellido_paterno" class="control-label">Apellido Paterno <span class="required">*</span></label>
										<input type="text" name="apellido_paterno" id="apellido_paterno" value="" class="input-block form-control" data-validate="required">
									</div>
								</div>
								<div class="col col-sm-3 col-xs-12">
									<div class="form-group">
										<label for="apellido_materno" class="control-label">Apellido Materno <span class="required">*</span></label>
										<input type="text" name="apellido_materno" id="apellido_materno" value="" class="input-block form-control" data-validate="required">
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col col-sm-4 col-xs-12">
									<div class="form-group">
										<label for="compania" class="control-label">Compañía <span class="required">*</span></label>
										<input type="text" name="compania" id="compania" value="" class="input-block form-control" data-validate="required">
									</div>
								</div>
								<div class="col col-sm-4 col-xs-6">
									<div class="form-group">
										<label for="lada" class="control-label">Lada oficina</label>
										<input type="text" name="lada" id="lada" value="" class="input-block form-control">
									</div>
								</div>
								<div class="col col-sm-4 col-xs-6">
									<div class="form-group">
										<label for="telefono" class="control-label">Teléfono oficina</label>
										<input type="text" name="telefono" id="telefono" value="" class="input-block form-control">
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col col-sm-4 col-xs-12">
									<div class="form-group">
										<label for="celular" class="control-label">Celular</label>
										<input type="text" name="celular" id="celular" value="" class="input-block form-control">
									</div>
								</div>
								<div class="col col-sm-4 col-xs-12">
									<div class="form-group">
										<label for="correo" class="control-label">Correo electrónico <span class="required">*</span></label>
										<input type="text" name="correo" id="correo" value="" class="input-block form-control" data-validate="required">
									</div>
								</div>
								<div class="col col-sm-4 col-xs-12">
									<div class="form-group">
										<label for="calle" class="control-label">Calle</label>
										<input type="text" name="calle" id="calle" value="" class="input-block form-control">
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col col-2 col-xs-6">
									<div class="form-group">
										<label for="numero_exterior" class="control-label"> Número exterior</label>
										<input type="text" name="numero_exterior" id="numero_exterior" value="" class="input-block form-control">
									</div>
								</div>
								<div class="col col-2 col-xs-6">
									<div class="form-group">
										<label for="numero_interior" class="control-label">Número interior</label>
										<input type="text" name="numero_interior" id="numero_interior" value="" class="input-block form-control">
									</div>
								</div>
								<div class="col col-sm-4 col-xs-6">
									<div class="form-group">
										<label for="ciudad" class="control-label">Ciudad/Estado<span class="required">*</span></label>
										<select name="ciudad" id="ciudad" data-validate="required" class="form-control input-block">
											<option value="">Ciudad</option>
											<option value="Baja California">Baja California</option>
											<option value="Baja California Sur">Baja California Sur</option>
											<option value="Campeche">Campeche</option>
											<option value="Coahuila de Zaragoza">Coahuila de Zaragoza</option>
											<option value="Colima">Colima</option>
											<option value="Chiapas">Chiapas</option>
											<option value="Chihuahua">Chihuahua</option>
											<option value="Ciudad de México">Ciudad de México</option>
											<option value="Durango">Durango</option>
											<option value="Guanajuato">Guanajuato</option>
											<option value="Guerrero">Guerrero</option>
											<option value="Hidalgo">Hidalgo</option>
											<option value="Jalisco">Jalisco</option>
											<option value="México">México</option>
											<option value="Michoacán de Ocampo">Michoacán de Ocampo</option>
											<option value="Morelos">Morelos</option>
											<option value="Nayarit">Nayarit</option>
											<option value="Nuevo León">Nuevo León</option>
											<option value="Oaxaca">Oaxaca</option>
											<option value="Puebla">Puebla</option>
											<option value="Querétaro">Querétaro</option>
											<option value="Quintana Roo">Quintana Roo</option>
											<option value="San Luis Potosí">San Luis Potosí</option>
											<option value="Sinaloa">Sinaloa</option>
											<option value="Sonora">Sonora</option>
											<option value="Tabasco">Tabasco</option>
											<option value="Tamaulipas">Tamaulipas</option>
											<option value="Tlaxcala">Tlaxcala</option>
											<option value="Veracruz de Ignacio de la Llave">Veracruz de Ignacio de la Llave</option>
											<option value="Yucatán">Yucatán</option>
											<option value="Zacatecas">Zacatecas</option>
										</select>
									</div>
								</div>
								<div class="col col-sm-4 col-xs-6">
									<div class="form-group">
										<label for="codigo" class="control-label">Código Postal</label>
										<input type="text" name="codigo" id="codigo" value="" class="input-block form-control">
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col col-sm-3 col-xs-12">
									<div class="form-group">
										<label for="interesado" class="control-label">Interesado en: <span class="required">*</span></label>
										<select name="interesado" id="interesado" class="input-block form-control" data-validate="required">
											<option value="">Selecciona</option>
											<option value="unidades">Venta Unidades</option>
											<option value="refacciones">Refacciones</option>
											<option value="servicio">Servicio</option>
										</select>
									</div>
								</div>
								<div class="col col-sm-3 col-xs-12">
									<div class="form-group">
										<label for="numero" class="control-label">Número Unidades Interés: <span class="required">*</span></label>
										<input type="text" name="numero" id="numero" value="" class="input-block form-control" data-validate="required">
									</div>
								</div>
								<div class="col col-sm-3 col-xs-6">
									<div class="form-group">
										<label for="dicision" class="control-label">División: <span class="required">*</span></label>
										<select name="dicision" id="dicision" class="input-block form-control" data-validate="required">
											<option value="">Selecciona</option>
											<option value="autobuses">Autobuses</option>
											<option value="carga">Carga</option>
											<option value="mixto">Mixto</option>
										</select>
									</div>
								</div>
								<div class="col col-sm-3 col-xs-6">
									<div class="form-group">
										<label for="sector" class="control-label">Sector <span class="required">*</span></label>
										<select name="sector" id="sector" class="input-block form-control" data-validate="required">
											<option value="">Selecciona</option>
											<option value="agricultura">Agricultura</option>
											<option value="ambiente">Ambiente</option>
											<option value="banco">Banco</option>
											<option value="bebida">Bebida</option>
											<option value="comida">Comida</option>
											<option value="comunicaciones">Comunicaciones</option>
											<option value="construcci�n">Construcción</option>
											<option value="cuidado de la Salud">Cuidado de la Salud</option>
											<option value="educaci�n">Educación</option>
											<option value="electr�nica">Electrónica</option>
											<option value="energ�a">Energía</option>
											<option value="env�o/Embarque">Envío/Embarque</option>
											<option value="fletes">Fletes</option>
											<option value="gobierno">Gobierno</option>
											<option value="ingenier�a">Ingeniería</option>
											<option value="manufactura">Manufactura</option>
											<option value="maquinar�a">Maquinaría</option>
											<option value="media">Media</option>
											<option value="menudeo(Retail)">Menudeo(Retail)</option>
											<option value="no lucrativos">No lucrativos</option>
											<option value="otros">Otros</option>
											<option value="qu�micos">Químicos</option>
											<option value="recreaci�n">Recreación</option>
											<option value="seguros">Seguros</option>
											<option value="tecnolog�a">Tecnología</option>
											<option value="telecomunicaciones">Telecomunicaciones</option>
											<option value="transporte de Personal (Pasajero)">Transporte de Personal (Pasajero)</option>
											<option value="transporte">Transporte</option>
											<option value="transporte P�blico Federal (Pasajero)">Transporte Público Federal (Pasajero)</option>
											<option value="transporte Urbano (Pasajero)">Transporte Urbano (Pasajero)</option>
											<option value="vestido">Vestido</option>
										</select>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col col-12">
									<div class="form-group">
										<label for="descripcion" class="control-label">Descripción</label>
										<textarea rows="4" cols="50" name="descripcion" id="descripcion" value="" class="input-block form-control"></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col col-12">
								</div>
							</div>

							<div class="row">
								<div class="col col-8 col-xs-12">
									<div class="form-check">
										<label class="checkbox">
											<input type="checkbox" data-validate="required" class="form-check-input" id="datos" name="datos">
											<span>Autoriza el uso de sus datos personales</span>
										</label>
									</div>
									<div class="form-check">
										<label class="checkbox">
											<input type="checkbox" data-validate="required" class="form-check-input" id="aviso" name="aviso">
											<span><a href="/terminos-legales" target="_blank">Acepto recibir información de Freightliner México. De igual manera acepto los términos y condiciones.</a></span>
										</label>
									</div>
								</div>

								<div class="col col-sm-4 col-xs-12">
									<div class="form-actions text-right">
										<input
											type="submit"
											class="button button-primary button-large"
											value="Enviar"
										/>
									</div>
								</div>
							</div>
					</form>

				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import AOS from 'aos';
	import 'aos/dist/aos.css';

	export default {
		name: 'Empresa',
		layout: 'site',
		mounted() {

			//AOS.init();
		},
		methods: {}
	}
</script>

<style scoped lang="less">

	.block-hero {

		padding-top: 100%;
		background-image: url('~assets/images/template/empresa/splash-empresa-mobile.jpg');

		@media @md-n-above {

			padding-top: 45%;
			background-image: url('~assets/images/template/empresa/splash-empresa.jpg');
		}
	}

	.block-form {

		.form-control {

			border-radius: 0;
			background: lighten(@brand-3, 15%);
		}
	}

</style>