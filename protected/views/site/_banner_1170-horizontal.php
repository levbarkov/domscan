<div id="<?= $id ?>" class="ads-ban <?= $class ?>" ng-if="vm.view == 'grid' || vm.view == 'table'">

	<script type="text/javascript">
        googletag.cmd.push(function() { googletag.display('<?= $id ?>'); });
    </script>

</div>